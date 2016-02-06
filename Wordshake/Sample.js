var o=['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ'];
var main=['हफ्ता','साल','आज','कल','कैलेंडर','सेकंड','घंटा','मिनट','बजे','घड़ी','सकना','करना','जाना','आना','हसना','बनाना','देखना','दूर','छोटा','सुंदर','बदसूरत','कठिन','अच्छा','आदमी','आप','आशा','और','एक','कमरा','कुरसी','खिड़की','गाड़ी','गुजराती','चाचा','चिड़िया','छोटा','जर्मन','जापानी','ठीक','तीन','तुम','तू','दादी','दूसरा','दो','नहीं','पंखा','पिता','पुराना','बड़ा','बहुत','बहू','बूढ़ा','भारतीय','मकान','माता','मानव','यह','रविवार','राजा','लाल','लोग','वह','हम','हवादार','है','अभी','आज','और','कितना','किताब']

var telugu = ['అ','ఆ','ఇ','ఈ','ఉ','ఊ','ఋ','ఎ','ఏ','ఐ','ఒ','ఓ','ఖ','గ','ఘ','ఙ','చ','ఛ','జ','ఞ','ట','ఠ','డ','ఢ','ణ','త','థ','ద','ధ','న','ప','ఫ','బ','భ','మ','య','ర','ఱ','ల','ళ','వ','శ','ష','స','హ'];
var telugu_dict = ['దయ','ధన్యవాదములు','అది','అవును','నిజమె','కాదు','ఏంటి','ఆంగ్లము','ఎల','ఎక్కడ','ఎప్పుడు','ఎవరు','ఏది','ఎంత','ఎన్ని','వద్దు','లేదు','కాదు','రాదు','బాలేదు','తెలియదు','నాకు','కాలేదు','భాష','నాపేరు','ఉంది','ఎలా','ఉన్నారు','ఎక్కడికి','ఏంటి','ఎక్కడ','ఎందుకు','ఎవరు','ఎలా','ఏమి','ఉంది','లేదు','నాకు','కావాలి','మాసం','సంవత్సరం','మాసం','తేది','నూతన','ఇది','చాలా','బాగుంది','మీరు','ఎక్కడ','నను','సినిమా','చూస్తున్నాను','ఉంది','తరువు','తరవండి','అవును','నాకోసం','మీకోసం','నకోసం','కాదు','అవును','ఎంత','కాలేదు','నాకు','సున్న','ఒక','రెండు','మూడు','నాలుగు','ఐదు','ఆరు','ఏడు','ఎనిమిది','తొమ్మిది','పది','పదకొందు','పన్నెండు','పదమూడు','పద్నాలుగు','పదిహేను','పదహారు','పదిహేడు','పద్దెనిమిది','పంతొమ్మిది','ఇరవై','ఇరవైఒకటి','ఇరవైరెండు','ఇరవైమూడు','నలబై','వంద' ,'వెయ్యి','రెండువేలు','కోటి','సగం','ముందు','ఉదయం','రాత్రి','ఒక','గంటలు','ఒక్క','క్షణం','నిమిషాలు','గంటలు','రోజు','వారం','నెల','రోజు' ,'నేడు','నేడు','రేపు','ఈవారం','గత','వారం','వారం','ఆది','సోమ','మంగళ','బుధ','గురు','శుక్ర','శని','మాఘము','ఆషాఢము','రంగు','నలుపు'];

var getElementId=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];
//var get=[111,112,113,121,122,123,131,132,133,141,142,143,151]
var j=0;
var i=0;
var word='';
var count=0;
var score=0;

var mainarray=o[0];
console.log(mainarray);

document.getElementById("Score").innerHTML="Form " + "a " + "word " + "and " + "check " + " whether " + "you " + "are " + "correct " + "or " + "not.";

//console.log('juss outside setlanguage');

function setlanguage()							//Loads the alphabets in the table as the user selects the language option
{
	score = 0;
	var t = 11;
	var h=0;
	var lang = document.getElementById('Language');							// Returns the language selected by the user
	var langval = lang.options[lang.selectedIndex].value;
	console.log('value is ' + langval);
	for(t;t<=55;t++)
	{
		var get = document.getElementById(t);
		
		if (langval == 'telugu')												// For telugu, generate random table
		{
			var rand = telugu[Math.floor(Math.random() * telugu.length)];
		}
		
		if (langval == 'hindi')													// For Hindi, generate random table
		{
			var rand = o[Math.floor(Math.random() * o.length)];
		}
		document.getElementById(t).innerHTML=rand;

		if (t%5 == 0)
			t = t+5;
	}
	word='';
}

function regenerate()															// Regenerate the randomize the table
{	
	console.log('inside regenerate');
	word='';
	j=0;	
	var lang = document.getElementById('Language');								// Returns the language chosen by user
	var langval = lang.options[lang.selectedIndex].value;
	console.log('inside regenerate: ' + langval);
	document.getElementById("Selectedletter").innerHTML='';

	if(langval=='telugu')														// Regenerate telugu table
	{
	for(var i=0;i<25;i++)
	{
		var item = telugu[Math.floor(Math.random()*(telugu.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;
		j++;
	}
	}
	if(langval=='hindi')														// Regenerate hindi table
	{
	for(var i=0;i<25;i++)
	{
		var item = o[Math.floor(Math.random()*(o.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;				// Insert randomized value in table
		j++;
	}
	}
	document.getElementById("Score").innerHTML="Form " + "a " + "word " + "and " + "check " + " whether " + "you " + "are " + "correct " + "or " + "not.";
	score=0;
}
setlanguage();

function getdata(a,b)															// Retrieve the data from the cell clicked
{
	a=a-1;
	b=b-1;
	var data='';
	var data=document.getElementById("tbl").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML="Your " + "word: " + word;
	document.getElementById("Score").innerHTML='';
}

function Check()																// Check whether entered word is valid word or not.
{
	//if(word=='')
	//	alert("Select atleast 1 letter");
	var flag=0;
	console.log(word);
	var lang = document.getElementById('Language');
	var langval = lang.options[lang.selectedIndex].value;
	if(langval=='hindi')														// Check for Hindi word whether its equal or not
	{
	for(var k=0;k<main.length;k++)
	{
		console.log(main[k]);
		if(word==main[k])
		{
		flag=1;
		score=score+2;
		document.getElementById("Score").innerHTML="Congratulations!! " + "Your " + "score " + "is " + score;		// Word found
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML="Sorry!! " + "Word " + "not " + "found.";		// Word is not valid
	flag=0;
	}
	if(langval=='telugu')
	{																			// Check for Telugu word whether its equal or not
	for(var k=0;k<telugu_dict.length;k++)
	{
		console.log(main[k]);
		if(word==telugu_dict[k])
		{
		flag=1;
		score=score+2;
		document.getElementById("Score").innerHTML="Congratulations!! " + "Your " + "score " + "is " + score;	//Word found
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML="Sorry!! " + "Word " + "not " + "found.";			//Word not valid
	flag=0;
	}
	word='';
	document.getElementById("Selectedletter").innerHTML='';
}