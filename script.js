const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const whoAreWe = document.getElementById('who_are_we');
const howWeHelp = document.getElementById('how_we_help');
const whoWeHelp = document.getElementById('who_we_help');
tab1.addEventListener('click', () => {
  console.log('tab 1');
  tab1.classList.add('selected');
  tab2.classList.remove('selected');
  tab3.classList.remove('selected');
  whoAreWe.style.display = 'inline-block';
  howWeHelp.style.display = 'none';
  whoWeHelp.style.display = 'none';
});
tab2.addEventListener('click', () => {
  console.log('tab 2');
  tab2.classList.add('selected');
  tab1.classList.remove('selected');
  tab3.classList.remove('selected');
  whoAreWe.style.display = 'none';
  howWeHelp.style.display = 'inline-block';
  whoWeHelp.style.display = 'none';
});
tab3.addEventListener('click', () => {
  console.log('tab 3');
  tab3.classList.add('selected');
  tab1.classList.remove('selected');
  tab2.classList.remove('selected');
  whoAreWe.style.display = 'none';
  howWeHelp.style.display = 'none';
  whoWeHelp.style.display = 'inline-block';
});
