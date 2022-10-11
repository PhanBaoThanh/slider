import './App.scss';
import {useState} from 'react'
import img1 from './img/img-1.jpeg'
import img2 from './img/img-2.jpeg'
function App() {
  const data = [img1,img2,img1,img2]
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <div className='sliders'>
        {
          data.map((item,index) => (
            <div className='slider' style={{background: `url(${item}) center/cover no-repeat`,left:`${index*100}%`,transform: `translateX(-${count * 100}%)`}}>
              <div className='slider__number'>{index + 1}</div>
            </div>
          ))
        }
        
      </div>
      <div className='btns'>
        {count >= data.length - 1 ? (
          <></>
        ) : (
          <button type="button" className="btn" onClick={() => setCount(prev => prev + 1)}>Next</button>
        )}

        {count === 0 ? (
          <></>
        ) : (
          <button type="button" className="btn" onClick={() => setCount(prev => prev - 1)}>Prev</button>
        )}
      </div>
    </div>
  );
}

export default App;
