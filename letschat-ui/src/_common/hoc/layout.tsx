import React from 'react'
import { Redirect } from 'react-router'
import Layout from '../../components/layout/layout'

/**
 * Layout hoc
 * @param Component component to render
 */
function reqLayout(Component: React.ComponentType) {
  function LayoutHoc(props: any) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }

  return LayoutHoc
}
export default reqLayout
