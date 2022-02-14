import React from "react";
import "./App.css";
import useSound from "use-sound";
import muz from './mp/krasavchik.mp3'

function App() {
  const [currentWord, setCurrentWord] = React.useState(0);
  const [transWord, setTransWord] = React.useState("-----------");
  const [play] = useSound(muz);
  const [btn, setBtn] = React.useState(true);
  const [words, setWords] = React.useState([
    { unit: "1", word: "afraid", translation: "бояться", muz: play},
    { unit: "1", word: "agree", translation: "соглашаться" },
    { unit: "1", word: "angry", translation: "злиться" },
    { unit: "1", word: "arrive", translation: "прибывать" },
    { unit: "1", word: "attack", translation: "атаковать" },
    { unit: "1", word: "bottom", translation: "дно" },
    { unit: "1", word: "clever", translation: "умный" },
    { unit: "1", word: "cruel", translation: "жестокий" },
    { unit: "1", word: "finally", translation: "в конце концов" },
    { unit: "1", word: "hide", translation: "прятаться" },
    { unit: "1", word: "hunt", translation: "охотиться" },
    { unit: "1", word: "lot", translation: "много" },
    { unit: "1", word: "middle", translation: "середина" },
    { unit: "1", word: "moment", translation: "момент" },
    { unit: "1", word: "pleased", translation: "довольный" },
    { unit: "1", word: "promise", translation: "обещать" },
    { unit: "1", word: "reply", translation: "отвечать" },
    { unit: "1", word: "safe", translation: "безопасный" },
    { unit: "1", word: "trick", translation: "трюк" },
    { unit: "1", word: "well", translation: "колодец" },
    { unit: "2", word: "adventure", translation: "приключения" },
    { unit: "2", word: "approach", translation: "приближаться" },
    { unit: "2", word: "carefully", translation: "осторожно" },
    { unit: "2", word: "chemical", translation: "химический" },
    { unit: "2", word: "create", translation: "создавать" },
    { unit: "2", word: "evil", translation: "зловещий" },
    { unit: "2", word: "experiment", translation: "эксперимент" },
    { unit: "2", word: "kill", translation: "убить" },
    { unit: "2", word: "laboratory", translation: "лаборотория" },
    { unit: "2", word: "laugh", translation: "смех" },
    { unit: "2", word: "loud", translation: "громкий" },
    { unit: "2", word: "nervous", translation: "нервный" },
    { unit: "2", word: "noise", translation: "шум" },
    { unit: "2", word: "project", translation: "проект, задача" },
    { unit: "2", word: "scare", translation: "бояться" },
    { unit: "2", word: "secret", translation: "секрет" },
    { unit: "2", word: "shout", translation: "кричать" },
    { unit: "2", word: "smell", translation: "нюхать" },
    { unit: "2", word: "terrible", translation: "ужасный" },
    { unit: "2", word: "worse", translation: "хуже" },
    { unit: "3", word: "alien", translation: "чужой" },
    { unit: "3", word: "among", translation: "среди" },
    { unit: "3", word: "chart", translation: "диаграмма" },
    { unit: "3", word: "cloud", translation: "облака" },
    { unit: "3", word: "comprehend", translation: "понимать" },
    { unit: "3", word: "describe", translation: "описывать" },
    { unit: "3", word: "ever", translation: "когда либо" },
    { unit: "3", word: "fail", translation: "неудача" },
    { unit: "3", word: "friendly", translation: "дружелюбный" },
    { unit: "3", word: "grade", translation: "степень" },
    { unit: "3", word: "instead", translation: "вместо" },
    { unit: "3", word: "library", translation: "библиотека" },
    { unit: "3", word: "planet", translation: "планета" },
    { unit: "3", word: "report", translation: "отчет" },
    { unit: "3", word: "several", translation: "несколько" },
    { unit: "3", word: "solve", translation: "решать" },
    { unit: "3", word: "suddenly", translation: "внезапно" },
    { unit: "3", word: "suppose", translation: "полагать" },
    { unit: "3", word: "universe", translation: "космос" },
    { unit: "3", word: "view", translation: "зрение" },
    { unit: "4", word: "appropriate", translation: "подходящий" },
    { unit: "4", word: "avoid", translation: "избегать" },
    { unit: "4", word: "behave", translation: "вести себя" },
    { unit: "4", word: "calm", translation: "спокойный" },
    { unit: "4", word: "concern", translation: "беспокойство" },
    { unit: "4", word: "content", translation: "довольный" },
    { unit: "4", word: "expect", translation: "ожидать" },
    { unit: "4", word: "frequently", translation: "часто" },
    { unit: "4", word: "habit", translation: "привычка" },
    { unit: "4", word: "instruct", translation: "обучать" },
    { unit: "4", word: "issue", translation: "дела" },
    { unit: "4", word: "none", translation: "нисколько" },
    { unit: "4", word: "patient", translation: "терпеливый" },
    { unit: "4", word: "positive", translation: "позитивный" },
    { unit: "4", word: "punish", translation: "наказывать" },
    { unit: "4", word: "represent", translation: "показывать" },
    { unit: "4", word: "shake", translation: "трясти" },
    { unit: "4", word: "spread", translation: "распростронять" },
    { unit: "4", word: "stroll", translation: "гулять" },
    { unit: "4", word: "village", translation: "деревня" },
    { unit: "5", word: "aware", translation: "осведомленный" },
    { unit: "5", word: "badly", translation: "плохим образом" },
    { unit: "5", word: "belong", translation: "принадлежать" },
    { unit: "5", word: "continue", translation: "продолжать" },
    { unit: "5", word: "error", translation: "ошибка" },
    { unit: "5", word: "experience", translation: "опыт" },
    { unit: "5", word: "field", translation: "поле" },
    { unit: "5", word: "hurt", translation: "ранить" },
    { unit: "5", word: "judgment", translation: "суждение" },
    { unit: "5", word: "likely", translation: "наверное" },
    { unit: "5", word: "normal", translation: "нормальный" },
    { unit: "5", word: "rare", translation: "редкий" },
    { unit: "5", word: "relax", translation: "отдыхать" },
    { unit: "5", word: "request", translation: "спрашивать" },
    { unit: "5", word: "reside", translation: "проживать" },
    { unit: "5", word: "result", translation: "результат" },
    { unit: "5", word: "roll", translation: "катить" },
    { unit: "5", word: "since", translation: "с" },
    { unit: "5", word: "visible ", translation: "видимый" },
    { unit: "5", word: "wild", translation: "дикий" },
    { unit: "6", word: "advantage", translation: "преимущество" },
    { unit: "6", word: "cause", translation: "причина" },
    { unit: "6", word: "choice", translation: "выбор" },
    { unit: "6", word: "community", translation: "общество" },
    { unit: "6", word: "dead", translation: "мертвый" },
    { unit: "6", word: "distance", translation: "дистанция" },
    { unit: "6", word: "escape", translation: "побег" },
    { unit: "6", word: "face", translation: "лицо" },
    { unit: "6", word: "follow", translation: "следовать" },
    { unit: "6", word: "fright", translation: "испуг" },
    { unit: "6", word: "ghost", translation: "призрак" },
    { unit: "6", word: "individual", translation: "индивидуальный" },
    { unit: "6", word: "pet", translation: "домашний питомец" },
    { unit: "6", word: "reach", translation: "достигать" },
    { unit: "6", word: "return", translation: "возвращать" },
    { unit: "6", word: "survive", translation: "выживать" },
    { unit: "6", word: "upset", translation: "грустный" },
    { unit: "6", word: "voice", translation: "голос" },
    { unit: "6", word: "weather", translation: "погода" },
    { unit: "6", word: "wise", translation: "мудрый" },
    { unit: "7", word: "allow", translation: "позволять" },
    { unit: "7", word: "announce", translation: "анонсировать" },
    { unit: "7", word: "beside", translation: "рядом" },
    { unit: "7", word: "challenge", translation: "испытание" },
    { unit: "7", word: "claim", translation: "восклицать" },
    { unit: "7", word: "condition", translation: "состояние" },
    { unit: "7", word: "contribute", translation: "способствовать" },
    { unit: "7", word: "difference", translation: "разница" },
    { unit: "7", word: "divide", translation: "делить" },
    { unit: "7", word: "expert", translation: "эксперт" },
    { unit: "7", word: "famous", translation: "знаменитый" },
    { unit: "7", word: "force", translation: "сила" },
    { unit: "7", word: "harm", translation: "вред" },
    { unit: "7", word: "lay", translation: "ложить" },
    { unit: "7", word: "peace", translation: "мир" },
    { unit: "7", word: "prince", translation: "принц" },
    { unit: "7", word: "protect", translation: "защищать" },
    { unit: "7", word: "sense", translation: "ощущать" },
    { unit: "7", word: "sudden", translation: "внезапный" },
    { unit: "7", word: "therefore", translation: "поэтому" },
    { unit: "8", word: "accept", translation: "принимать" },
    { unit: "8", word: "arrange", translation: "приводить в порядок" },
    { unit: "8", word: "attend", translation: "посещать" },
    { unit: "8", word: "balance", translation: "балансировать" },
    { unit: "8", word: "contrast", translation: "разница" },
    { unit: "8", word: "encourage", translation: "ободрять" },
    { unit: "8", word: "familiar", translation: "похожий" },
    { unit: "8", word: "grab", translation: "хватать" },
    { unit: "8", word: "hang", translation: "вешать" },
    { unit: "8", word: "huge", translation: "огромный" },
    { unit: "8", word: "necessary", translation: "необходимый" },
    { unit: "8", word: "pattern", translation: "шаблон" },
    { unit: "8", word: "propose", translation: "предложить" },
    { unit: "8", word: "purpose", translation: "цель" },
    { unit: "8", word: "release", translation: "освобождать" },
    { unit: "8", word: "require", translation: "дребовать" },
    { unit: "8", word: "single", translation: "единичный" },
    { unit: "8", word: "success", translation: "успех" },
    { unit: "8", word: "tear", translation: "рвать" },
    { unit: "8", word: "theory", translation: "теория" },
    { unit: "9", word: "against", translation: "напротив" },
    { unit: "9", word: "beach", translation: "пляж" },
    { unit: "9", word: "damage", translation: "повреждения" },
    { unit: "9", word: "discover", translation: "находить, открывать" },
    { unit: "9", word: "emotion", translation: "эмоции" },
    { unit: "9", word: "fix", translation: "чинить" },
    { unit: "9", word: "frank", translation: "чистосердечный" },
    { unit: "9", word: "identify", translation: "определять" },
    { unit: "9", word: "island", translation: "остров" },
    { unit: "9", word: "ocean", translation: "океан" },
    { unit: "9", word: "perhaps", translation: "возможно" },
    { unit: "9", word: "pleasant", translation: "довольный" },
    { unit: "9", word: "prevent", translation: "предостерегать" },
    { unit: "9", word: "rock", translation: "камень" },
    { unit: "9", word: "save", translation: "сохранять" },
    { unit: "9", word: "step", translation: "шаг" },
    { unit: "9", word: "still", translation: "все еще" },
    { unit: "9", word: "taste", translation: "пробовать" },
    { unit: "9", word: "throw", translation: "бросать" },
    { unit: "9", word: "wave", translation: "волна" },
    { unit: "10", word: "benefit", translation: "польза" },
    { unit: "10", word: "certain", translation: "определенный" },
    { unit: "10", word: "chance", translation: "шанс" },
    { unit: "10", word: "effect", translation: "эффект" },
    { unit: "10", word: "essential", translation: "необходимый" },
    { unit: "10", word: "far", translation: "далеко" },
    { unit: "10", word: "focus", translation: "фокусироваться" },
    { unit: "10", word: "function", translation: "функция" },
    { unit: "10", word: "grass", translation: "трава" },
    { unit: "10", word: "guard", translation: "охрана" },
    { unit: "10", word: "image", translation: "изображение" },
    { unit: "10", word: "immediate", translation: "немедленный" },
    { unit: "10", word: "primary", translation: "первоначальный" },
    { unit: "10", word: "proud", translation: "гордиться" },
    { unit: "10", word: "remain", translation: "оставаться" },
    { unit: "10", word: "rest", translation: "отдыхать" },
    { unit: "10", word: "separate", translation: "отдельный" },
    { unit: "10", word: "site", translation: "место" },
    { unit: "10", word: "tail", translation: "хвост" },
    { unit: "10", word: "trouble", translation: "проблема" },
    
  ]);

  const seeTranslation = () => {
    if(btn){
      setTransWord(words[currentWord].translation);
    }
    if(!btn){
      setTransWord(words[currentWord].word);
    }
  };
  const handlerNext = () => {
    const nextQuestion = currentWord + 1;
    if (nextQuestion < words.length) {
      setCurrentWord(currentWord + 1);
    } else {
      alert("it is last word");
    }
    setTransWord("-----------");
  };
  const handlerPrev = () => {
    const prevQuestion = currentWord - 1;
    if (prevQuestion < words.length) {
      setCurrentWord(currentWord - 1);
    }
    if(currentWord < 1){
      setCurrentWord(0);
      alert('it is first word')
    }
    setTransWord("-----------");
  };
  const changeHanler = (e) => {
    if (e.target.value == 1) {
      setCurrentWord(0);
    } else if (e.target.value == 2) {
      setCurrentWord(20);
    } else if (e.target.value == 3) {
      setCurrentWord(40);
    } else if (e.target.value == 4) {
      setCurrentWord(60);
    } else if (e.target.value == 5) {
      setCurrentWord(80);
    } else if (e.target.value == 6) {
      setCurrentWord(100);
    } else if (e.target.value == 7) {
      setCurrentWord(120);
    } else if (e.target.value == 8) {
      setCurrentWord(140);
    } else if (e.target.value == 9) {
      setCurrentWord(160);
    } else if (e.target.value == 10) {
      setCurrentWord(180);
    }
  };
  const toggleBtn = () => {
    setBtn(!btn);
    console.log(btn);
  };
  const soundHandler = () => {
    words[currentWord].muz()
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header_flex" >
          <select onChange={changeHanler} className='selector'>
            <option disabled>Unit ?</option>
            <option value="1">unit 1</option>
            <option value="2">unit 2</option>
            <option value="3">unit 3</option>
            <option value="4">unit 4</option>
            <option value="5">unit 5</option>
            <option value="6">unit 6</option>
            <option value="7">unit 7</option>
            <option value="8">unit 8</option>
            <option value="9">unit 9</option>
            <option value="10">unit 10</option>
          </select>
          <button className="rus_eng_btn" onClick={toggleBtn}>rus/eng</button>
        </div>
        <div class="current_word">
          Unit-{words[currentWord].unit} {currentWord + 1}
          <div className="small_in_current">/{words.length}</div>
        </div>
        {btn ? (
          <div className="word_and_trans">
            <div class="main_word">{words[currentWord].word}</div>
            <div class="trans_word">{transWord}</div>
          </div>
        ) : (
          <div className="word_and_trans">
            <div class="main_word">{words[currentWord].translation}</div>
            <div class="trans_word">{transWord}</div>
          </div>
        )}
        <button className="translate_btn" onClick={seeTranslation}>
          show translation
        </button>
        <button onClick={soundHandler}>sound</button>
        <div className="flex_btns">
          <button className="next_btn" onClick={handlerPrev}>
            <div className="to_flex"><div className="to_spin">&#10148; &#10148;</div></div>
          </button>
          <button className="next_btn" onClick={handlerNext}>
            &#10148; &#10148;
          </button>
        </div>

      </header>
    </div>
  );
}

export default App;

//  const randomed = words.sort(()=>Math.random()-0.5)
