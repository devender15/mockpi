import openai
from flask.helpers import send_from_directory
from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

openai.api_key = "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"

# app = Flask(__name__, static_folder="build", static_url_path="")
app = Flask(__name__)

CORS(app)


def generate_voice(text):
    response = openai.TextToSpeech.create(
        engine="davinci",
        text=text
    )
    audio = response["data"]
    return audio


@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/interview', methods=['POST'])
def interview():

    # data coming from frontend is not in plain json so we have to convert it into json
    data = json.loads(request.data)

    topic = data['topic']
    num_questions = int(data['num_questions'])
    difficulty = data['difficulty']

    questions = []
    try:
        for i in range(num_questions):
            response = openai.Completion.create(
                engine="text-davinci-003",
                prompt=f"Create a question on '{topic}' Industry of difficulty level '{difficulty}'. You may also ask any question that comes under the '{topic}' umbrella.",
                temperature=0.9,
                max_tokens=100
            )
            questions.append(response['choices'][0]['text'])

        # return render_template('interview.html', questions=questions)
        return {"data": questions}
    except:
        return {"status": "ERROR", "message": "Something went wrong!"}


@app.route('/behavioral', methods=['POST'])
def generate_behavioral_questions():
    data = json.loads(request.data)
    no_of_questions = int(data['no_of_questions'])
    questions = []
    try:
        for i in range(no_of_questions):
            response = openai.Completion.create(
                engine="text-davinci-003",
                prompt=f"Create a General Behavioral Interview Question that is most likely to be asked in an interview.",
                temperature=0.9,
                max_tokens=100
            )
            questions.append(response['choices'][0]['text'])

        return {"data": questions}
    except:
        return {"status": "ERROR", "message": "Something went wrong!"}


@app.route('/answers', methods=['POST'])
def save_answers():
    answers = request.get_json()['answers']
    # Save answers to database or file
    return 'Success'


@app.route('/evaluate', methods=['POST'])
def evaluate_answers():
    interview_type = request.get_json()['interview_type']
    answers = request.get_json()['answers']
    final_data = []

    try:
        for answer in answers:
            response = None
            if (interview_type == "Technical"):
                response = openai.Completion.create(
                    engine="text-davinci-003",
                    prompt=f" Please evaluate and comment on my answer in a critical manner to the question - '{answer['question']}' and provide detailed feedback on my Coherence and cohesiveness, clarity, and content based on the question asked. Also, please suggest areas for improvement. My answer: '{answer['answer']}' Format of evaluation: Coherence and cohesiveness: , Clarity: , Content: , Areas of Improvement:. Don't give any kind of rating.",
                    temperature=0.1,
                    max_tokens=200
                )
            else:
                response = openai.Completion.create(
                    engine="text-davinci-003",
                    prompt=f"Suggest a structured and accurate approach or framework that can be used to answer this question in an interview: {answer['question']}",
                    temperature=0.1,
                    max_tokens=200
                )

            # getting reference from openai
            reference = None
            if (interview_type == "Technical"):
                reference = openai.Completion.create(
                    engine="text-davinci-003",
                    prompt=f"Provide a thorough and accurate answer to the following question - {answer['question']}, including any additional information or clarification requested in the inquiry.",
                    temperature=0.7,
                    max_tokens=200
                )
            else:
                reference = openai.Completion.create(
                    engine="text-davinci-003",
                    prompt=f"Improve and rewrite my answer in a thorough, well-reasoned and accurate way to the following question - {answer['question']} My answer: {answer['answer']}",
                    temperature=0.7,
                    max_tokens=200
                )

            # packing our data to send to the client
            final_data.append({"question": answer['question'], "score": response['choices']
                               [0]['text'].split("."), "reference": reference['choices'][0]['text']})
        return final_data
    except:
        return {"status": "ERROR", "message": "Something went wrong!"}


@app.route('/analysis', methods=['POST'])
def overall_analysis():
    data = request.get_json()['answers']
    sum_of_questions = 0
    analysis = {}

    for answer in data:
        response = openai.Completion.create(
            engine="text-davinci-003", prompt=f"Please critically rate the answer in terms of how well it addresses the question and provides a complete, coherent and cohesive information with clarity and quality of content on a scale of 1-10, where 1 is a very poor answer and 10 is the best possible answer that completely satisfies the question. Question: {answer['question']}. Answer: '{answer['answer']}' Reply only with a numerical rating. Rating: ", temperature=0.1, max_tokens=200)

        # adding the ratings of all the questions
        sum_of_questions += int(response['choices'][0]['text'])

    # calculating the overall analysis
    analysis['rating'] = (sum_of_questions / len(data)) * 10

    return analysis


if __name__ == '__main__':
    app.run()
