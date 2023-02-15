//en js classique
// const titre = document.createElement('h1');
// titre.className = "text-center";
// titre.innerText = "Hello World !";

//avec JSX
// const titre3 = <h1 className="text-center">Hello World of JSX !</h1>;

//composant avec une fonction, à noter: on l'appelle avec la syntaxe <Component/>
// const Titre4= (props) => <h1 className="text-center">{props.content}</h1>
const Product= (props) => (
    <div className="card text-center" style={{width:14+ 'em'}}>
        <img src={props.details.Image} className="card-img-top w-75 h-75 mx-2"id="cardImg" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{props.details.name}</h5>
            <p className="card-text">{props.details.price}€</p>
            <button onClick={props.handleClick} type="button"  className="btn btn-warning">ajouter</button>
        </div>
    </div>
)

//composant dans une classe
class App extends React.Component{
    state ={
        products: [
            {id: 1, name:"Cheeseburger", price: 5.95, Image:"https://risibank.fr/cache/medias/0/2/201/20129/full.png"},
            {id: 2, name:"280", price: 8.95, Image:"https://risibank.fr/cache/medias/0/2/201/20130/full.png"},
            {id: 3, name:"Nuggets", price: 3.95, Image:"https://risibank.fr/cache/medias/0/2/201/20128/full.jpeg"},
            {id: 4, name:"Big Mac", price: 7.95, Image:"https://risibank.fr/cache/medias/0/29/2975/297539/full.png"},
            {id: 5, name:"Tacos", price: 6.95, Image:"https://risibank.fr/cache/medias/0/2/201/20126/full.png"},
            {id: 6, name:"Beef BBQ", price: 10.95, Image:"https://risibank.fr/cache/medias/0/8/838/83884/full.png"},
            {id: 7, name:"Oreo", price: 1.95, Image:"https://risibank.fr/cache/medias/0/2/201/20132/full.jpeg"},
            {id: 8, name:"Menu BestOF", price: 15.95, Image:"https://risibank.fr/cache/medias/0/19/1983/198357/full.png"},
            {id: 9, name:"Chicken BBQ", price: 10.95, Image:"image/Mon projet.png"},
            {id: 10, name:"Burger Chicken", price: 7.95, Image:"image/SeekPng.com_burger-png_790996.png"},
            {id: 11, name:"Bucket Chick", price: 20.95, Image:"image/Mon projet (1).png"},
            {id: 12, name:"Nuggets Spicy", price: 9.95, Image:"image/Mon projet3.png"},
        ]
        //content:"Mon composant Class"
    }
    handleClick=(e)=> {
        const clickedElementId = e.target.parentNode.id // renvoie la div entière
        const clicked = this.state.products.find(element = element.id == clickedElementId)
        const copiedOrdered = [...this.state.ordered];
        copiedOrdered.push(clicked)
        this.setState({ordered: copiedOrdered})
    }
    
    render(){
        const productsList = this.state.products.map(product => 
            <Product key={product.id} details={product} handleClick={this.handleClick}/>
        )
        //const orderedList = this.state.ordered.map(order =>)

        return (
    <React.Fragment>
    <ul id="menu-list" style={{
    display:"none"    
    }}>
        <h1>Panier</h1>  
        <li>Entrée</li>
        <span className="Total">TOTAL :</span>
        <button className="cta"id="pay">
            <span class="span"><i className="fa-solid fa-credit-card"></i></span>
        <div></div>   
        </button>
        <button className="cta"id="trash">
            <span class="span"><i className="fa-solid fa-trash"></i></span>
        </button>
    </ul>
        <div className="list">{productsList}
        </div>
        
    </React.Fragment>
    )
        
            //<h1 className= "text-center">{this.state.content}</h1>
            //<button className="btn">Ma fonction</button>
        
        
    }
};

//pour créer un composant React en JSX
//const titre2 = React.createElement('h1',{id: "titreReact",className:"text.center"}, "Hello World of React !");

//on rend  l'élément dans le DOM en js classique

const root = document.querySelector('#app');
//app.appendChild(titre2);

//on rend l'élément dans le DOM via la méthode render() de ReactDom
ReactDOM.render(
    <App/>,
    root
);


const menuBtn = document.querySelector('.cta');

menuBtn.addEventListener('click', () => {
    const menuList = document.querySelector('#menu-list');
    console.log(menuList)
    if (menuList.style.display === 'none') {
    menuList.style.display = 'block';
  } else {
    menuList.style.display = 'none';
  }
});



