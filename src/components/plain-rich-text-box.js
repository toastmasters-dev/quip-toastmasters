/**
 * Wrapper component for `RichTextBox` which restricts editing styles.
 *
 * Yes, the name is a bit of an oxymoron :)
 */
const PlainRichTextBox = props => (
    <quip.apps.ui.RichTextBox
        {...props}
        allowedStyles={[quip.apps.RichTextRecord.Style.TEXT_PLAIN]}
        allowedInlineStyles={[]}
        disableInlineMenus={true}
    />
);

export default PlainRichTextBox;
