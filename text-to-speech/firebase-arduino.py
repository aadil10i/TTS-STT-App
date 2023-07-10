import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import serial

# Use a service account
cred = credentials.Certificate('/Users/ismaeildissougi/firebase-arduino/website-pde2101-firebase-adminsdk-jrepn-1483e61246.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# Set up serial communication with Arduino Uno
ser = serial.Serial('/dev/cu.usbserial-1410', 9600)

def on_snapshot(doc_snapshot, changes, read_time):
    for change in changes:
        if change.type.name == 'ADDED':
            doc = change.document.to_dict()
            text = doc['text']
            ser.write(text.encode())

# Listen to changes in the "messages" collection
doc_ref = db.collection(u'messages')
doc_watch = doc_ref.on_snapshot(on_snapshot)