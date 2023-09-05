import sqlite3
from flask import Flask, render_template, request, g, jsonify

app = Flask(__name__)

# Function to get the SQLite connection
def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect('timestamps.db')
    return g.db

# Close the SQLite connection at the end of each request
@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'db'):
        g.db.close()

@app.route("/", methods=['GET', 'POST'])
def hello():
    db = get_db()
    cursor = db.cursor()
    print("THIS CLICKED")
    if request.method == 'POST':
        try:
            cursor.execute("INSERT INTO timestamps (timestamp) VALUES (datetime('now'))")
            db.commit()
            print("Data inserted successfully.")
        except Exception as e:
            print("Error inserting data:", str(e))
    
    cursor.execute("SELECT timestamp FROM timestamps ORDER BY id DESC LIMIT 10")
    timestamps = cursor.fetchall()
    print("Timestamps retrieved:", timestamps)

    if 'X-Requested-With' in request.headers and request.headers['X-Requested-With'] == 'XMLHttpRequest':
        return jsonify(timestamps=timestamps)
    else:
        return render_template("index.html", timestamps=timestamps)

if __name__ == "__main__":
    app.run(debug=True)
