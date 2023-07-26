import React, {useMemo} from 'react'
/*import { Link } from 'gatsby'*/
import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import {Seo} from '../components/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'



const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid white;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid white;
      border-right: 1px solid white;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
     
    </>
  )
}

const Ca = ({data}) => {
 
  console.log(data.datoCmsPageCa2023.membresDuCa)
  const columns = React.useMemo(
    () => [
      {
        Header: 'Membre',
        columns: [
          {
            Header: 'Nom',
            accessor: 'nom',
          },
          {
            Header: 'Prénom',
            accessor: 'prenom',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Téléphone',
            accessor: 'telephone',
          },
          {
            Header: 'Détails',
            accessor: 'details',
            Cell: ({row}) => <span dangerouslySetInnerHTML={{__html: row.original.details}} />
          },
         
        ],
      },
    ],
    []
  )

  //const dataCa = React.useMemo(data.datoCmsPageCa2023.membresDuCa, [])


  return  ( 
    <Layout> 
    
      <Container text first >
          <h1>CA 2023 - Rock on the l'Oule</h1>
          
          <Styles>
            <Table columns={columns} data={data.datoCmsPageCa2023.membresDuCa} />
          </Styles>         
      </Container> 
    </Layout>
  )
}

export default Ca



// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
	<>
    <Seo title="Membres du CA 2023 - Rock on the l'Oule" 
    />
    <meta name="robots" content="noindex, nofollow"/>
  </>
  )
  

export const query = graphql`
  query {

    datoCmsPageCa2023 {
      
        membresDuCa {
          nom
          prenom
          telephone
          details
          email
        }
      
    }
  
  }
`
