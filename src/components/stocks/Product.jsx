import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {

  // State
  const [name, setName] = useState("")
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")

  const [data, setData] = useState([])

  const addProduct = async()=> {
    try {
      // ใช้ได้
      const url = "https://workshop-react-api.vercel.app/product"
      const user_id = localStorage.getItem('user_id')
      // API
      const res = await axios.post(url, {name,qty,price,image,user_id })
      fetchData()
    } catch (error) {
      // Error
      console.log(error);
      
    }
  }

  const fetchData = async()=>{
    try {
      const user_id = localStorage.getItem('user_id')
      const url = `https://workshop-react-api.vercel.app/product?user_id=${user_id}`
      // API
      const res = await axios.get(url)
      console.log(res.data);
      setData(res.data)

    } catch (error) {
      console.log(error);
    }
  }

  const deleteProduct = async(id)=> {
    try {
      const url = `https://workshop-react-api.vercel.app/product/${id}`
      const res = await axios.delete(url)
      fetchData()
      
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(()=>{ fetchData()  },[])

  return (
    <div>
 

      {/* BOX 1 (ฟอร์ม เพิ่ม / แก้ไข)*/}
      <div>
        <div className="bg-white rounded-lg shadow-lg m-10 p-5">
          <input
            placeholder="ชื่อสินค้า"
            className="border border-gray-400 py-2 m-4"
            type="text"
            name="name"
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            placeholder="จำนวน"
            className="border border-gray-400 py-2 m-4"
            type="number"
            name="qty"
            onChange={(e)=>setQty(e.target.value)}
          />
          <input
            placeholder="ราคา"
            className="border border-gray-400 py-2 m-4"
            type="number"
            name="price"
            onChange={(e)=>setPrice(e.target.value)}

          />
          <input
            placeholder="รูปภาพ"
            className="border border-gray-400 py-2 m-4"
            type="text"
            name="image"
            onChange={(e)=>setImage(e.target.value)}

          />
          <button className="bg-purple-500 text-white py-2 px-4" onClick={addProduct}>บันทึก</button>
        </div>
      </div>

      {/* BOX 2 (ตารางโชว์ข้อมูล) */}
      <div className="bg-white rounded-lg shadow-lg m-10 p-5">

      <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    รูปภาพ
                </th>
                <th scope="col" className="px-6 py-3">
                    ชื่อสินค้า
                </th>
                <th scope="col" className="px-6 py-3">
                    จำนวน
                </th>
                <th scope="col" className="px-6 py-3">
                    ราคา
                </th>
                <th scope="col" className="px-6 py-3">
                    แก้ไข / ลบ
                </th>
            </tr>
        </thead>
        <tbody>

        { data.map((item, index) => ( 
          <tr key={index}>
            <td>
              <img className="w-24" src={item.image} alt="" />
            </td>
            <td>{item.name}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
            <td><button onClick={()=>deleteProduct(item.id)} className="bg-red-500 py-2 px-2 rounded-lg text-white">ลบ</button></td>
          </tr>
         )) }


           
        
       
        </tbody>
    </table>

</div>

      </div>
    </div>
  );
};

export default Product;
