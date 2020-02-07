# FakeApi
Generate random data according is set by request. 

Json request example:

    {
    	"ammount": 2,
    	"object": {
    		"name": "name.firstName",
    		"picture": "internet.avatar",
    		"birth": "date.past"
    	}
    }  

## References

### `ammount`
The `ammount` key is the ammount of data that will be returned from api.

### `object`
The "object" key is the group of attributes of the every object that will be sent back. Every attribute is composed by the name of attribute and how the fake attribute will be generated (based in faker npm package - see more [here](https://www.npmjs.com/package/faker))