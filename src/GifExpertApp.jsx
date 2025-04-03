import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['One Punch']);
  const onAddCategory = ( newCategory ) => {
    if ( categories.includes( newCategory ) ) return;
    setCategories([ newCategory, ...categories]);    
  }

  return (
    <>
      <h2>
        {/* titulo */}
        GifExportApp
      </h2>
        {/* imput */}
        <AddCategory 
          onNewCategory={ (event) => onAddCategory(event) }          
        />
        
        {/* Listado de Gif */}
        {
          categories.map( ( category ) => (
            <GifGrid 
              key={ category }
              category={ category }
            />
          ))
        } 
          {/* Git Item */}

    </>
  )
}
