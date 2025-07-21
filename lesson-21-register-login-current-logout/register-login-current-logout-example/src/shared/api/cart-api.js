import instance from "./intstance";

export const fetchCart = async ()=> {
    const {data} = await instance.get("/carts/my");
    return data;
}