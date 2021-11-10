import type { GetServerSideProps, NextPage } from 'next'
import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { menuDataAdmin, menuDataUser, menuType } from '../../data/menu'

import { useRouter } from 'next/router'

const User : NextPage<menuType> = (props) => {

  return (
    <div className="wrapper">
      <Header />

      <Sidebar menu={props} />

      <div className="content-wrapper">
        <Breadcrumb />
        <section className="content">

        </section>
      </div>
      <Footer />
    </div>

  )
}



export default User


export const getServerSideProps: GetServerSideProps = async (context) => {

  return {
    props: {
      dataUser: menuDataUser ,
      dataAdmin: menuDataAdmin
    }
  }
}