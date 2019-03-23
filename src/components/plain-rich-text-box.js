/**
 * Wrapper component for `RichTextBox` which restricts editing styles.
 *
 * Yes, the name is a bit of an oxymoron :)
 */
export default function PlainRichTextBox(props) {
    const {interceptClicks, ...remainingProps} = props;

    return (
        <quip.apps.ui.RichTextBox
            {...remainingProps}
            ref={handleRef}
            allowedStyles={[quip.apps.RichTextRecord.Style.TEXT_PLAIN]}
            allowedInlineStyles={[]}
            disableInlineMenus={true}
        />
    );

    /*
     * Intercept clicks on the `RichTextBox` to make it editable.
     *
     * Due to HTML table sizing, the widest cell sets the width of its entire
     * column. Thus, the widest `RichTextBox` has no space to its right, making
     * it impossible to edit. That is, if the text is an @-mention, then
     * clicking on it opens a direct message dialog rather than editing the
     * `RichTextBox`.
     *
     * Thus, make clicks focus on the `RichTextBox` unless already focused.
     */
    function handleRef(richTextBox) {
        if (!interceptClicks || !richTextBox) {
            return;
        }

        const domNode = ReactDOM.findDOMNode(richTextBox);

        domNode.addEventListener('click', e => {
            // Use `document.activeElement` rather than `onFocus` and `onBlur`
            // in `RichTextBox` since those are not reliable when click events
            // are intercepted and swallowed.
            if (!domNode.contains(document.activeElement)) {
                e.preventDefault();
                e.stopPropagation();
                richTextBox.focus();
            }
        });
    }
}

PlainRichTextBox.defaultProps = {
    interceptClicks: true,
};
