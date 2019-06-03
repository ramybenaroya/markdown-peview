import React, { useCallback } from 'react';
import { func } from 'prop-types';
import './Editor.css';

const Editor = ({ onChange, id }) => {
	const onTextareaChange = useCallback(({ target: { value } }) => onChange(value), [onChange]);
	return (
		<div className="Editor full-size box">
			<textarea
				id={id}
				className="Editor-textarea full-size"
				onChange={onTextareaChange}
				placeholder="Start typing your Markdown code"
			/>
		</div>
	);
};

Editor.propTypes = {
	onChange: func.isRequired
};

export default Editor;
