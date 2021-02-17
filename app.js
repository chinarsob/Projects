new  Vue({
    el:"#assignment",

    data(){
        return{
            Message:'Hello World!!',
            name:'',
            confirmedName:''

        }
    },
        methods:
        {
            showMessage()
            {
                alert(this.Message);
            },
            populateName(event)
            {
                this.name=event.target.value;
            },
            populateconfirmedName(event)
            {
                this.confirmedName=event.target.value;
            }
        }
    });

