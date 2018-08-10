import PickList from "./pickList";
import Speechslot from "./speechSlot";

class SpeechSelect extends quip.apps.RichTextRecord {
    static getProperties = () => ({
        number: "number",
        details: "string",
        speakerName: 'string',
        speechTitle: 'string',
    });

    static getDefaultProperties = () => ({
        number: 0,
        details: { RichText_placeholderText: "Which project and manual is the speech?" },
        speakerName: { RichText_placeholderText: "Who is speaking?" },
        speechTitle: { RichText_placeholderText: "What is the title of the speech?" },
    });
}

quip.apps.registerClass(SpeechSelect, "draggable-card");

class RootRecord extends quip.apps.RootRecord {
    static getProperties = () => ({
        toastmaster: quip.apps.RichTextRecord,
        date: quip.apps.RichTextRecord,
        jokemaster: quip.apps.RichTextRecord,       
        topicsmaster: quip.apps.RichTextRecord,
        generalEvaluator: quip.apps.RichTextRecord,
        speechEvaluator1: quip.apps.RichTextRecord,
        speechEvaluator2: quip.apps.RichTextRecord,
        grammarian: quip.apps.RichTextRecord,
        timer: quip.apps.RichTextRecord,
        ahCounter: quip.apps.RichTextRecord,         
        cards: quip.apps.RecordList.Type(SpeechSelect),
    })

    static getDefaultProperties = () => ({
        date: { RichText_placeholderText: "When is the meeting?" },
        toastmaster: { RichText_placeholderText: "Add a name" },
        jokemaster: { RichText_placeholderText: "Add a name" }, 
        topicsmaster: { RichText_placeholderText: "Add a name" },
        generalEvaluator: { RichText_placeholderText: "Add a name" },
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
    // _key can be details
    setSpeech = (_value, speechInt, _key) => {
        const record = quip.apps.getRootRecord();
        const cards = record.get("cards").getRecords();
        const _card = cards.filter((card) => card.get('number') === parseInt(speechInt))[0];
        _card.set(_key, _value);        
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
                // speechTitle: card.get('speechTitle'),
                // speakerName: card.get('speakerName'),
            }; 
        });
        const obj = {
            date: record.get('date').getTextContent().trim(),
            toastmaster: record.get('toastmaster').getTextContent().trim(),
            jokemaster: record.get('jokemaster').getTextContent().trim(),
            topicsmaster: record.get('topicsmaster').getTextContent().trim(),
            generalEvaluator: record.get('generalEvaluator').getTextContent().trim(),
            speechEvaluator1: record.get('speechEvaluator1').getTextContent().trim(),
            speechEvaluator2: record.get('speechEvaluator2').getTextContent().trim(),
            grammarian: record.get('grammarian').getTextContent().trim(),
            timer: record.get('timer').getTextContent().trim(),
            ahCounter: record.get('ahCounter').getTextContent().trim(),
            speeches: _cards
        }

        const _str = JSON.stringify(obj);
        console.log('******************************* all the data', _str);
        quip.apps.openLink('http://output.jsbin.com/maguxep?data=' + encodeURIComponent(_str));
    } 

    render() {
        const record = quip.apps.getRootRecord();
        const date = record.get("date");
        const toastmaster = record.get("toastmaster");
        const jokemaster = record.get("jokemaster"); 
        const topicsmaster = record.get('topicsmaster');
        const generalEvaluator = record.get('generalEvaluator');
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
                    <p>Name <quip.apps.ui.RichTextBox
                        key={card.getId()}
                        record={card}
                    />         </p>           
                    {/* <p>Speaker name <input type="text" name='' onBlur={ (this) => { this.setSpeech(this.default) }/></p> */}
                    {/* <p>Speech title <quip.apps.ui.RichTextBox record={  card.get('speechTitle') } /></p> */}
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
                // RichText_defaultText: ''
            });
            cardList.add({
                number: 2,
                // RichText_defaultText: ''
            });
        }
        ReactDOM.render(<Root />, root);
    },
});
