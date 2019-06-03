import marked, { Renderer } from 'marked';

class NewTabLinkRenderer extends Renderer {
	link(...args) {
		return super.link(...args).replace(/^<a/, '<a target="blank"');
	}
}

marked.setOptions({
    renderer: new NewTabLinkRenderer(),
    breaks: true
});

export default text => marked(text);
