import styles from 'css/plain-rich-text-box.less';

/**
 * Wrapper component for `RichTextBox` which restricts editing styles.
 *
 * Yes, the name is a bit of an oxymoron :)
 */
const PlainRichTextBox = props => (
    <quip.apps.ui.RichTextBox
        className={styles.plainRichTextBox}
        {...props}
        allowedStyles={[quip.apps.RichTextRecord.Style.TEXT_PLAIN]}
        allowedInlineStyles={[]}
        disableInlineMenus={true}
    />
);

export default PlainRichTextBox;
