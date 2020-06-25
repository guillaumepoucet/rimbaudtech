
window.onbeforeunload = confirmExit;
function confirmExit()
{ 
	return 'En fermant, vous risquez de perdre la totalité de vos données. Etes-vous sûr(e) de vouloir quitter ?';
}
