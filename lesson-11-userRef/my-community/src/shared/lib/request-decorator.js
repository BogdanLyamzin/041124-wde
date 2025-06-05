const requestDecorator = request => {
    const func = async (payload)=> {
        try {
            const {data} = await request(payload);
            return {data, error: null};
        }
        catch(error) {
            return {error, data: null};
        }
    }

    return func;
}

export default requestDecorator;