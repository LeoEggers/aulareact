import './styles.css';
import SearchBar from '../../components/SearchBar';
import HeaderClient from '../../components/HeaderClient';
import CatalogCard from '../../components/CatalogCard';
import BtnCarregarMais from '../../components/btnCarregarMais';

export default function Catalog() {
  return (
    <>
    <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          </div>

          <BtnCarregarMais/>
        </section>
      </main>
    </>
  );
}
