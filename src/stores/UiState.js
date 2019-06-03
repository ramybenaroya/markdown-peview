import { decorate, computed, observable } from 'mobx';
import compileMarkdownToHtml from '../services/compile-markdown-to-html';

class UiState {
    constructor({ defaultMarkdown }) {
        this.defaultMarkdown = defaultMarkdown;
        this.markdown = defaultMarkdown;
    }
    defaultMarkdown = '';
	markdown = '';
	get compiledHtml() {
		return compileMarkdownToHtml(this.markdown);
	}
	updateMarkdown = value => {
		this.markdown = value;
	};
}

export default decorate(UiState, {
	markdown: observable,
	compiledHtml: computed
});
