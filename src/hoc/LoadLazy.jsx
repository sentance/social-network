import React from 'react';
import Loader from '../components/Loader/Loader';




const WithLazyLoad = (Component) => {
  return (props) =>{
      return <React.Suspense fallback={<Loader />}>
                 <Component {...props} />
                </React.Suspense>

}  
}
export default WithLazyLoad;