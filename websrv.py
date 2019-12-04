import time
import threading
import json, ast
import threading
import flask
from flask import request
from flask import abort
from flask import Flask
from flask import make_response
from flask import jsonify

# dd = jsonify('{}')
reg_mutex = threading.Lock()
reg_mutex.acquire()
time.sleep(1)
reg_mutex.release()
def run_flask():

    app = Flask(__name__)

    @app.route('/', methods=['GET'])
    def get_alldata():
        test1= "".join(str('all_data'))
        test2 = test1.replace('\'','\"')
        # self.wfile.write(test2)

        resp = make_response(test2,200)
        resp.headers['content-type']='text/html'
        resp.headers['Access-Control-Allow-Origin']= '*'
        resp.headers['Access-Control-Allow-Methods'] ='GET, POST, PUT, DELETE, OPTIONS'
        return resp    

    @app.route('/array/<string:array_data>', methods=['GET'])

    def set_array(array_data):
        print('set array: %s = %s'%(type(array_data),str(array_data)))
        array_data = array_data.replace('{','').replace('}','').replace('&callback=','')
        resp = make_response('{"inp":"'+array_data+'"}',200)
        resp.headers['content-type']='text/html'
        resp.headers['Access-Control-Allow-Origin']= '*'
        resp.headers['Access-Control-Allow-Methods'] ='GET, POST, PUT, DELETE, OPTIONS'
        return resp    
        
    if __name__ == '__main__':
        # //from flask.logging import default_handler
        # app.logger.removeHandler(default_handler)
        app.run(debug=False,host="127.0.0.1",port=8082)

thread_flask     = threading.Thread(target=run_flask, args=())
thread_flask.start()

print("after ad start")
while 1==1:
    #print("all_data = "+"".join(str(all_data)))
    time.sleep(20);
