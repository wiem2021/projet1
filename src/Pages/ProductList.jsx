import styled from 'styled-components'   
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div`
     
`
const Ti = styled.h1`
      margin: 20px;`
const FilterContainer = styled.div`
     display: flex;
     justify-content: space-between;
`
const Filter = styled.div`
      margin: 20px;`

const FilterText = styled.span`
     font-size: 20px;
     font-weight: 600;
`
const Select = styled.select``
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Ti>Dresses</Ti>
      <FilterContainer>
        <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select>
            <Option disabled selected> Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
        </Select>

        <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
        </Select>


        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
           <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>

           </Select>
          


        </Filter>
      </FilterContainer>
           <Products/>
           <Newsletter/>
            <Footer/> 

    </Container>
  )
}

export default ProductList
