//Used to render out the description for menu item. Will bold text if it can find embedded <strong> tag within text.
function parseDescText(text){
    if(!text) return;
    const arrayText = text.split(/<strong>/);
    return arrayText.map((item) => {
      const endCollection = item.split(/<\/strong>/);
      if(endCollection.length < 2){
          return <>{item}</>
      }else{
        return <><strong style={{color: '#404040'}}>{endCollection[0]}</strong>{endCollection[1]}</>
      }
    });
  }

  export default parseDescText;