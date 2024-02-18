import React from 'react'

const Home = () => {
  
  const logout = ()=>{
    localStorage.clear()
    setTimeout(() => {
      window.location.href = "/"
    }, 1500);
  }

  
  return (
    <div>
      <button onClick={logout}>ออกจากระบบ</button>
    </div>
  )
}

export default Home