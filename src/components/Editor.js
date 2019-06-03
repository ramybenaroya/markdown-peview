import React, { useCallback } from 'react';
import { func, string } from 'prop-types';
import './Editor.css';

const Editor = ({ id, onChange, initialValue }) => {
	console.log('<Editor/> Render');
	const onTextareaChange = useCallback(({ target: { value } }) => onChange(value), [onChange]);
	return (
		<div className="Editor full-size box">
			<textarea
				id={id}
				className="Editor-textarea full-size"
				onChange={onTextareaChange}
				defaultValue={initialValue}
				placeholder="Start typing your Markdown code"
			/>
		</div>
	);
};

Editor.propTypes = {
	id: string,
	initialValue: string,
	onChange: func.isRequired
};

Editor.defaultProps = {
	initialValue: ''
};

export default Editor;
