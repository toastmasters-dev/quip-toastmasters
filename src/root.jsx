import PickList from "./pickList";
import Speechslot from "./speechSlot";

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
        speechEvaluator1: quip.apps.RichTextRecord,
        speechEvaluator2: quip.apps.RichTextRecord,
        grammarian: quip.apps.RichTextRecord,
        timer: quip.apps.RichTextRecord,
        ahCounter: quip.apps.RichTextRecord,         
        cards: quip.apps.RecordList.Type(SpeechSelect),
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
        speechEvaluator1: { RichText_placeholderText: "Add a name" },
        speechEvaluator2: { RichText_placeholderText: "Add a name" },
        grammarian: { RichText_placeholderText: "Add a name" },
        timer: { RichText_placeholderText: "Add a name" },
        ahCounter: { RichText_placeholderText: "Add a name" },    
        cards: [],     
    })
}

quip.apps.registerClass(RootRecord, "root");

class Root extends React.Component {
    setSpeech = (_value, speechInt) => {
        const record = quip.apps.getRootRecord();
        const cards = record.get("cards").getRecords();
        const _card = cards.filter((card) => card.get('number') === parseInt(speechInt))[0];
        _card.set('details', _value);        
        
        // Force a render without state change. 
        // to show speech details
        this.forceUpdate();
    }

    openTab = () => {
        const record = quip.apps.getRootRecord();
        const cards = record.get("cards").getRecords();
        const _cards = cards.map((card) => { 
            return {
                number: card.get('number'),
                details: card.get('details'), 
            }; 
        });
        const obj = {
            date: record.get('date').getTextContent().trim(),
            toastmaster: record.get('toastmaster').getTextContent().trim(),
            jokemaster: record.get('jokemaster').getTextContent().trim(),
            topicsmaster: record.get('topicsmaster').getTextContent().trim(),
            generalEvaluator: record.get('generalEvaluator').getTextContent().trim(),
            speaker1: record.get('speaker1').getTextContent().trim(),
            speechTitle1: record.get('speechTitle1').getTextContent().trim(),
            speaker2: record.get('speaker2').getTextContent().trim(),
            speechTitle2: record.get('speechTitle2').getTextContent().trim(),
            speechEvaluator1: record.get('speechEvaluator1').getTextContent().trim(),
            speechEvaluator2: record.get('speechEvaluator2').getTextContent().trim(),
            grammarian: record.get('grammarian').getTextContent().trim(),
            timer: record.get('timer').getTextContent().trim(),
            ahCounter: record.get('ahCounter').getTextContent().trim(),
            speeches: _cards
        };

        const _str = JSON.stringify(obj);
        quip.apps.openLink('http://output.jsbin.com/maguxep?data=' + encodeURIComponent(_str));
    } 

    render() {
        const record = quip.apps.getRootRecord();
        const date = record.get("date");
        const toastmaster = record.get("toastmaster");
        const jokemaster = record.get("jokemaster"); 
        const topicsmaster = record.get('topicsmaster');
        const generalEvaluator = record.get('generalEvaluator');
        const speaker1 = record.get('speaker1');
        const speechTitle1 = record.get('speechTitle1');
        const speaker2 = record.get('speaker2');
        const speechTitle2 = record.get('speechTitle2');
        const speechEvaluator1 = record.get('speechEvaluator1');
        const speechEvaluator2 = record.get('speechEvaluator2');
        const grammarian = record.get('grammarian');
        const timer = record.get('timer');
        const ahCounter = record.get('ahCounter');
        const cards = record.get("cards").getRecords();

        return (
            <div>
                <p>Meeting date <quip.apps.ui.RichTextBox record={date} /></p>
                {/* add speakers */}
                <p>toastmaster <quip.apps.ui.RichTextBox record={toastmaster} /></p>
                <p>jokemaster <quip.apps.ui.RichTextBox record={jokemaster} /></p>
                {/* need time, speech title, which project and manual */}
                {cards.map((card) => {
                    const _number = card.get('number');
                    return <div>
                    <p>Speaker { _number }</p>
                    <p>Name: <quip.apps.ui.RichTextBox record={ eval('speaker' + _number) } /></p>
                    <p>Title: <quip.apps.ui.RichTextBox record={ eval('speechTitle' + _number) } /></p>
                    { card.get('details') ?  
                        <Speechslot card={ card } 
                            removeValue={ this.setSpeech } /> :
                        <PickList card={ card } setSpeech={ this.setSpeech } />
                    }</div>
                })}                 
                <p>topicsmaster <quip.apps.ui.RichTextBox record={topicsmaster} /></p>
                <p>generalEvaluator <quip.apps.ui.RichTextBox record={generalEvaluator} /></p>
                <p>speechEvaluator1 <quip.apps.ui.RichTextBox record={speechEvaluator1} /></p>
                <p>speechEvaluator2 <quip.apps.ui.RichTextBox record={speechEvaluator2} /></p>
                <p>grammarian <quip.apps.ui.RichTextBox record={grammarian} /></p>
                <p>timer <quip.apps.ui.RichTextBox record={timer} /></p>
                <p>ahCounter <quip.apps.ui.RichTextBox record={ahCounter} /></p>   
                <button onClick={ this.openTab }>save and print</button>            
            </div>
        );
    }
}

quip.apps.initialize({
    initializationCallback: (root, params) => {
        const rootRecord = quip.apps.getRootRecord();
        const cardList = rootRecord.get("cards");
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
