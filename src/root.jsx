import PickList from "./pickList";
import Speechslot from "./speechSlot";
import { getTime } from './utils';
const spreadSheetId = '1tsv0pJv6i6W8IG809Kod12x58e_7s_IfF785u4UUdpg';

class SpeechSelect extends quip.apps.RichTextRecord {
    static getProperties = () => ({
        number: "number",
        details: "string",
    });

    static getDefaultProperties = () => ({
        number: 0,
        details: { RichText_placeholderText: "Which project and manual is the speech?" },
    });
}

quip.apps.registerClass(SpeechSelect, "draggable-card");

class RootRecord extends quip.apps.RootRecord {
    static getProperties = () => ({
        date: quip.apps.RichTextRecord,
        toastmaster: quip.apps.RichTextRecord,
        jokemaster: quip.apps.RichTextRecord,       
        topicsmaster: quip.apps.RichTextRecord,
        generalEvaluator: quip.apps.RichTextRecord,
        speaker1: quip.apps.RichTextRecord,
        speechTitle1: quip.apps.RichTextRecord,
        speaker2: quip.apps.RichTextRecord,
        speechTitle2: quip.apps.RichTextRecord,
        evaluator1: quip.apps.RichTextRecord,
        evaluator2: quip.apps.RichTextRecord,
        grammarian: quip.apps.RichTextRecord,
        timer: quip.apps.RichTextRecord,
        ahCounter: quip.apps.RichTextRecord,         
        speakerSlot: quip.apps.RecordList.Type(SpeechSelect),
    })

    static getDefaultProperties = () => ({
        date: { RichText_placeholderText: "When is the meeting? Start with @Date" },
        toastmaster: { RichText_placeholderText: "Add a name" },
        jokemaster: { RichText_placeholderText: "Add a name" }, 
        topicsmaster: { RichText_placeholderText: "Add a name" },
        generalEvaluator: { RichText_placeholderText: "Add a name" },
        speaker1: { RichText_placeholderText: "Add a name" },
        speechTitle1: { RichText_placeholderText: "Add a speech title" },
        speaker2: { RichText_placeholderText: "Add a name" },
        speechTitle2: { RichText_placeholderText: "Add a speech title" },
        evaluator1: { RichText_placeholderText: "Add a name" },
        evaluator2: { RichText_placeholderText: "Add a name" },
        grammarian: { RichText_placeholderText: "Add a name" },
        timer: { RichText_placeholderText: "Add a name" },
        ahCounter: { RichText_placeholderText: "Add a name" },    
        speakerSlot: [],     
    })
}

quip.apps.registerClass(RootRecord, "root");

class Root extends React.Component {
    postToSheet = (_arr) => {
        if (!_arr) return;
        const authObject = quip.apps.auth("gdrive");

        const jwtKey = authObject.getTokenResponseParam("access_token");
        authObject.request({
            method: 'POST',
            data: { "values": [_arr] },
            headers: { 'Content-Length' : 0, authorization: 'Bearer ' + jwtKey },
            url: 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadSheetId + '/values/Sheet1:append?valueInputOption=USER_ENTERED&alt=json',
        }).then(response => response.json())
        .then((res) => {       
            console.log(res)
        })
        .catch(error => console.log("update failed", error));   
    }

    setSpeech = (_value, speechInt) => {
        const record = quip.apps.getRootRecord();
        const speakerSlot = record.get("speakerSlot").getRecords();
        const _card = speakerSlot.filter((card) => card.get('number') === parseInt(speechInt))[0];
        _card.set('details', _value);        
        
        // Force a render without state change. 
        // to show speech details
        this.forceUpdate();
    }

    // JSON format: refer to agenda.json for details
    openTab = () => {
        const orderedPayloadKeys = [
            'date',
            'toastmaster',
            'grammarian',
            'ahCounter',
            'timer',
            'topicsmaster',
            'speechTitle1',
            'project1',
            'speaker1',
            'duration1',
            'speechTitle2',
            'project2',
            'speaker2',
            'duration2',
            'generalEvaluator',
            'evaluator1',
            'evaluator2'
        ];
        const record = quip.apps.getRootRecord();
        const speakerSlot = record.get("speakerSlot").getRecords();
        const payloadObject = {}; 
        const _speakerSlot = speakerSlot.map((card) => { 
            const _number = card.get('number');
            const _details = card.get('details');
            const _duration = getTime(card.get('details'));
            payloadObject['project' + _number] = _details;
            payloadObject['duration' + _number] = _duration;

            return {
                number: _number,
                details: _details,
                duration: _duration,
            }; 
        });

        
        // TODO: get from version form manifest.json or another config file
        const obj = { version: '1.0', data: {} };
        obj.data.items = { speeches: _speakerSlot };
        obj.data.officers = {
            president: "KC Lakshminarasimham",
            vpm: "Anny He",
            vpe: "Srinath Krishna Ananthakrishnan",
            vppr: "Max Kukartsev",
            secretary: "Rosaura Arevalo",
            soa: "Jack Faraday",
            treasurer: "Ron Sison"
        };
        
        Object.keys(record.getData()).forEach((_key) => {     
            if (_key != 'speakerSlot') {
                const _value = record.get(_key).getTextContent().trim();
                payloadObject[_key] = _value;
                
                if (_key === 'date') {
                    obj.data.date = _value;
                } else if (_key.startsWith('speaker')) {
                    // get the last character
                    const _index = parseInt(_key.slice(-1));
                    obj.data.items.speeches[_index - 1].speaker = _value;
                } else if(_key.startsWith('speechTitle')) {
                    // get the last character
                    const _index = parseInt(_key.slice(-1));
                    obj.data.items.speeches[_index - 1].title = _value;
                } else {
                    obj.data.items[_key] = _value;
                }
            }  
        });        

        orderedPayloadKeys.forEach((str, index) => {
            orderedPayloadKeys[index] = payloadObject[str];
        });
        this.postToSheet(orderedPayloadKeys);
        const url = `https://toastmasters-dev.github.io/print-agenda/?data=${encodeURIComponent(JSON.stringify(obj))}`;
        quip.apps.openLink(url);
    } 

    render() {
        const record = quip.apps.getRootRecord();
        const date = record.get("date");
        const toastmaster = record.get("toastmaster");
        const jokemaster = record.get("jokemaster"); 
        const topicsmaster = record.get('topicsmaster');
        const generalEvaluator = record.get('generalEvaluator');
        const speakerObj = {
            1: record.get('speaker1'),
            2: record.get('speaker2'),
        };
        const speechTitleObj = {
            1: record.get('speechTitle1'),
            2: record.get('speechTitle2'),
        };         
        const evaluator1 = record.get('evaluator1');
        const evaluator2 = record.get('evaluator2');
        const grammarian = record.get('grammarian');
        const timer = record.get('timer');
        const ahCounter = record.get('ahCounter');
        const speakerSlot = record.get("speakerSlot").getRecords();

        return (
            <div>
                <p>Meeting Date <quip.apps.ui.RichTextBox record={date} /></p>
                <p>Toastmaster <quip.apps.ui.RichTextBox record={toastmaster} /></p>
                <p>Grammarian <quip.apps.ui.RichTextBox record={grammarian} /></p>
                <p>Timer <quip.apps.ui.RichTextBox record={timer} /></p>
                <p>Ah Counter <quip.apps.ui.RichTextBox record={ahCounter} /></p>
                <p>Jokemaster <quip.apps.ui.RichTextBox record={jokemaster} /></p>
                <p>Topicsmaster <quip.apps.ui.RichTextBox record={topicsmaster} /></p>
                {speakerSlot.map((card) => {
                    const _number = card.get('number');
                    return <div>
                    <p>Speaker { _number }</p>
                    <p>Name: <quip.apps.ui.RichTextBox record={ speakerObj[_number] } /></p>
                    <p>Title: <quip.apps.ui.RichTextBox record={ speechTitleObj[_number] } /></p>
                    { card.get('details') ?  
                        <Speechslot card={ card } 
                            removeValue={ this.setSpeech } /> :
                        <PickList card={ card } setSpeech={ this.setSpeech } />
                    }</div>
                })}                 
                <p>General Evaluator <quip.apps.ui.RichTextBox record={generalEvaluator} /></p>
                <p>Evaluator 1 <quip.apps.ui.RichTextBox record={evaluator1} /></p>
                <p>Evaluator 2 <quip.apps.ui.RichTextBox record={evaluator2} /></p>
                <quip.apps.ui.Button 
                    onClick={ this.openTab } 
                    primary='BLUE'
                    text='Save and Print'>
                </quip.apps.ui.Button>
            </div>
        );
    }
}

quip.apps.initialize({
    initializationCallback: (root, params) => {
        const rootRecord = quip.apps.getRootRecord();
        const cardList = rootRecord.get("speakerSlot");
        if (params.isCreation) {
            cardList.add({
                number: 1,
                details: '',
            });
            cardList.add({
                number: 2,
                details: '',
            });
        }
        ReactDOM.render(<Root />, root);
    },
});
