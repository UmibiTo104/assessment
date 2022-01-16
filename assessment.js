'use strict';
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided=document.getElementById('result-area');
const tweeDivided=document.getElementById('tweet-area')

function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick=()=>{
    const userName=userNameInput.value;
    if(userName.length===0){
        return;
    }
    
    removeAllChildren(resultDivided)
    const header=document.createElement('h3');
    header.innerText='診断結果';
    resultDivided.appendChild(header);
    
    const paragraph=document.createElement('p');
    const result=assessment(userName);
    paragraph.innerText=result;
    resultDivided.appendChild(paragraph);


removeAllChildren(tweeDivided);
const anchor=document.createElement('a');
const hrefValue='https://twitter.com/intent/tweet?button_hashtag='+encodeURIComponent('あなたのいいところ')+'&ref_src=twsrc%5Etfw';
anchor.setAttribute('href',hrefValue);
anchor.className='twitter-hashtag-button';
anchor.setAttribute('data-text',result)
anchor.innerText='Tweet#あなたのいいところ'
tweeDivided.appendChild(anchor);

const script=document.createElement('script');
script.setAttribute('src','https://platform.twitter.com/widgets.js');
tweeDivided.appendChild(script);
};

const answers=[
    '{userName}さんのいいところは声です。{userName}さんの特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}さんのいいところはまなざしです。{userName}さんに見つめられた人は、気になって仕方がないでしょう。',
    '{userName}さんのいいところは情熱です。{userName}さんの情熱に周りの人は感化されます。',
    '{userName}さんのいいところは厳しさです。{userName}さんの厳しさが物事をいつも成功に導きます。',
    '{userName}さんのいいところは知識です。博識な{userName}さんを多くの人が頼りにしています。',
    '{userName}さんのいいところはユニークさです。{userName}さんだけのその特徴はが皆を楽しくさせます。',
    '{userName}さんのいいところは用心深さです。{userName}さんの洞察に、多くの人が助けられます。',
    '{userName}さんのいいところは見た目です。内側からあふれ出る{userName}さんの良さに皆が気を引かれます。',
    '{userName}さんのいいところは決断力です。{userName}さんがする決断にいつも助けられる人がいます。',
    '{userName}さんのいいところは思いやりです。{userName}さんに気にかけてもらった多くの人が感謝しています。',
    '{userName}さんのいいところは感受性です。{userName}さんが感じたことを皆が共感し、分かりあうことが出来ます。',
    '{userName}さんのいいところは節度です。強引すぎない{userName}さんの考えに皆が感謝しています。',
    '{userName}さんのいいところは好奇心です。新しいことに向かっていく{userName}さんの心構えが多く人に魅力的に映ります。',
    '{userName}さんのいいところは気配りです。{userName}さんの配慮が多く人を救っています。',
    '{userName}さんのいいところはその全てです。ありのままの{userName}さん自身がいいとことなのです。',
    '{userName}さんのいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}さんが皆から評価されます。',
];

function assessment(userName){
    let sumOfCharCode=0;
    for(let i=0;i<userName.length;i++){
        sumOfCharCode= sumOfCharCode+userName.charCodeAt(i);
    }
    const index=sumOfCharCode%answers.length;
    let result=answers[index];
    result=result.replace(/\{userName\}/g,userName);
    return result;
}

