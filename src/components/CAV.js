import {Component} from 'react';

class CAV extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
        cav_number : '',
        validationMessage:'',
        numbers:[]
        }
    
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event)
	{
	this.setState({cav_number : event.target.value})
	}
    handleSubmit(event)
	{
        if(this.state.cav_number.trim().length !== 10){

            this.setState({validationMessage : "length should be equal to 10"})
            
            }
            else if(this.state.cav_number.trim().substring(3,0) !== 'CAV'){
        
            
            this.setState({validationMessage : "First 3 code should be CAV"})
            
        
            }else{
        
            
            this.setState({validationMessage : ""})
        
            
            this.setState({ numbers: [...this.state.numbers, this.state.cav_number] })
        
            this.mainInput.value = "";
        
            }
        // this.setState({ validationMessage : ""})
        // this.setState({ numbers: [...this.state.numbers, this.state.cav_number] })
        // this.mainInput.value = "";
        
    }
    handleDeleteInput(arrayValue)
	{
        if (arrayValue > -1) 
        {
            this.state.numbers.splice(arrayValue, 1);

            var getList = this.state.numbers;
            this.setState({ numbers: getList })

        }
    }

    render() { 
        return ( 
            
            <div className="CAV_MAIN">
                <div className="row">
                  <div className="col-md-5">
                    <div className="CAV">
                        <h3><b>Link quotes for Resource and Tasks</b></h3>
                        <input className="CAV_INPUT" type="text" placeholder="Enter CAV number" onChange={this.updateInput} ref={(ref) => this.mainInput= ref}></input>
                        <button className="CAV_ADD_BUTTON" onClick={this.handleSubmit}><i className="far fa-plus-circle"></i><b>Add</b></button>
                        <p style = {{color: "red"}} id = "error">{this.state.validationMessage}</p>
                        
                    </div>
                  </div>
                  
                  <div className="col-md-7">
                    <div className="vl"></div>
                      <p><b>CAV numbers added (1)</b> <span className="Remove_all_span"><a href="#">Remove all</a></span></p>

                      {this.state.numbers.map((item,index) => {
				return <button className="button button_remove" onClick={()=>this.handleDeleteInput(index)}>{item}<i className="fas fa-minus-circle"></i></button>;
				})}

                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default CAV;


                