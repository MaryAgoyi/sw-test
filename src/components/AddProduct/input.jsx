export const array = [
	[],
	[
		{
			id: 'height',
			name: 'height',
			type: 'number',
			placeholder: 'Height',
			label: 'Height(CM)',
			errormessage: 'height should be a number ',
			required: true,
			pattern: '^([1-9][0-9]{0,2}|1000)$'
		},
		{
			id: 'width',
			name: 'width',
			type: 'number',
			placeholder: 'Width',
			label: 'Width (CM)',
			errormessage: 'width should be a number ',
			required: true,
			pattern: '^([1-9][0-9]{0,2}|1000)$'
		},
		{
			id: 'length',
			name: 'length',
			type: 'number',
			placeholder: 'Length',
			label: 'Length (CM)',
			errormessage: 'length should be a number ',
			required: true,
			pattern: '^([1-9][0-9]{0,2}|1000)$'
		}
	],
	[
		{
			id: 'size',
			name: 'size',
			type: 'number',
			placeholder: 'size',
			label: 'size (MB)',
			className: 'size',
			errormessage: 'size should be a number ',
			pattern: '^([1-9][0-9]{0,2}|1000)$',
			required: true
		}
	],
	[
		{
			id: 'weight',
			name: 'weight',
			type: 'number',
			className: 'weight',
			placeholder: 'weight',
			label: 'weight(KG) ',
			errormessage: 'weight should be a number ',
			pattern: '^([1-9][0-9]{0,2}|1000)$',

			required: true
		}
	]
];
export const labelType = [
	'Please, choose a type',
	'Please, provide dimensions',
	'Please, provide size',
	'Please, provide weight'
];
export const categories = ['sw', 'furniture', 'dvd', 'book'];
