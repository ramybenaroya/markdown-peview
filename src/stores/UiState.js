import { decorate, computed, observable } from 'mobx';
class UiState {
	markdown = '';
	get compiledHtml() {
		return this.markdown
	}
	updateMarkdown = value => {
		this.markdown = value;
	};
}

export default decorate(UiState, {
	markdown: observable,
	compiledHtml: computed
});
