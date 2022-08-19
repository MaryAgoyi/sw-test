import React, { useState } from 'react';

const FormInputs = (props) => {
	const [focused, setFocused] = useState(false);
	const { onChange, errorMessage, label, ...inputProps } = props;
	const handleFocused = () => {
		setFocused(true);
	};

	return (
		<tr>
			<th align='left'>
				<label>{label}</label>
			</th>
			<td className='col'>
				<input
					{...inputProps}
					onChange={onChange}
					onBlur={handleFocused}
					focused={focused.toString()}
				/>
				<span>{errorMessage}</span>
			</td>
		</tr>
	);
};
export default FormInputs;
