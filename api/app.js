const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.json([
		{
			id: '1',
			title: 'Book Review: the Bear & The Nightingale...',
		},
		{
			id: '2',
			title: 'Game Review: Pokemon Brillian Diamond',
		},
		{
			id: '3',
			title: 'Show Review: Alice in Borderland',
		},
		{
			id: '4',
			title: 'Eng Premma',
		},
		{
			id: '3',
			title:'ggwp'
		}
	]);
});

app.listen(4000, () => {
	console.log('listening for requests on port 4000');
});
