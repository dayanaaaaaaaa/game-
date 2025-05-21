from flask import Flask, render_template, redirect, request


app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        with open("scores.txt", "a") as f:
            f.write(f"{request.form['name']} ----asdfasdfasdfasdfasd----- {request.form['score']}\n")

        return redirect("/results")
    
    return render_template("canvas.html")


@app.route("/results")
def res():
    with open("scores.txt", "r") as f:
        all = f.readlines()
    results = []
    for one in all:
        results.append(one.split(' ----asdfasdfasdfasdfasd----- '))

    return render_template("results.html", results = results)


if __name__ == '__main__':
    app.run(port=5000)