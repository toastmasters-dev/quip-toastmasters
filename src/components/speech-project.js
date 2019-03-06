import {SpeechRoleRecord} from 'model/records';
import styles from 'css/speech-project.less';

const {PropTypes} = React;

const SpeechProject = ({speechRoleRecord}) => (
    <div className={styles.speechProject}>
        <span>{speechRoleRecord.get('speechProject')}</span>
        <br />
        <quip.apps.ui.Button
            text="Cancel"
            onClick={() => speechRoleRecord.set('speechProject', '')}
        />
    </div>
);

SpeechProject.propTypes = {
    speechRoleRecord: PropTypes.instanceOf(SpeechRoleRecord),
};

export default SpeechProject;
