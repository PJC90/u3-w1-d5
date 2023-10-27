import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Galleria extends Component{
    state = {
        film: []
    }
    
    componentDidMount = ()=>{
    this.getImg()
    }
    
    getImg = async()=>{
        try{
            const response = await fetch("http://www.omdbapi.com/?apikey=6aaf6af2&s=" + this.props.searchFilm)
            if(response.ok){
                const arrayOfFilm = await response.json()
                console.log(arrayOfFilm)
                //ora con setState salviamo l'array presente in Search di arrayOfFilm nell'array film
                this.setState({
                    film: arrayOfFilm.Search
                })
                
            } else{
                throw new Error("errore nel recupero dei film")
            }
        }catch(error){
            console.log("error",error)
        }
    }  

    
    render(){
    const primiSei = this.state.film.slice(0, 6)
    return(
        <div>
            <h4 className="text-white mt-5 ms-4">{this.props.title}</h4>
            <Row className="ms-3 g-3 justify-content-center">
                {primiSei.map((filmSingolo)=>{
                    return (
                        <Col sm={6} md={4} lg={3} xl={2} key={filmSingolo.imdbID}>
                        <img src={filmSingolo.Poster} alt={"immagine:" + filmSingolo.Title} className="img-fluid h-100"/>
                        </Col>
                    )
                })}
            </Row>
            
        </div>
    )
}
}

export default Galleria