


import { useSnackbar } from 'notistack';

// @mui
import {
  Card,
  Container,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Avatar,
  TableHead
} from '@mui/material';

import moment from 'moment'
// hooks
import useSettings from '../../../../hooks/useSettings';

import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';

import * as React from 'react';

import { styled } from '@mui/material/styles';

import useWalletBot from '../../../../hooks/useWalletBot'

import { useEffect, useState } from 'react'
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import Scrollbar from 'src/components/Scrollbar';
import PaymentsMoreMenu from 'src/sections/@dashboard/payments/list/PaymentsMoreMenu';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '140px',
});

const IconImg = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  height: '50px',
});

const gray = styled('div')({
  backgroundColor: '#ccc'
})

const StyledCard = styled(Card)({
  height: 140,
  textAlign: 'center'
})

const BaseStatusCard = styled(StyledCard)({
  color: '#fff'
})

const DisconnectedStatusCard = styled(BaseStatusCard)({
  backgroundColor: '#E9574E'
})

const ConnectedStatusCard = styled(BaseStatusCard)({
  backgroundColor: '#029454'
})

const StyledPayNowCard = styled(StyledCard)({
  cursor: 'pointer'
})

// ----------------------------------------------------------------------

WalletBotDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

import { AddressBalance } from '../../../../hooks/useWalletBot';
import { useRouter } from 'next/router';

export default function WalletBotDashboard() {

  const { enqueueSnackbar } = useSnackbar();

  const { themeStretch } = useSettings();

  const { data, error, listAddressBalances } = useWalletBot()

  useEffect(() => {
    if (!data) { return }
    listAddressBalances().then((balances) => {
      setAddressBalances(balances)
    })
  }, [data])

  const { push } = useRouter()

  const [addressBalances, setAddressBalances] = useState<AddressBalance[]>([]);

  if (error) {
    enqueueSnackbar('Error Loading Wallet Bot', { variant: 'warning' })
  }

  if (!data) {
    return <></>
  }

  const TABLE_HEAD = [
    { id: 'chain', label: 'Chain', alignRight: false },
    { id: 'currency', label: 'Currency', alignRight: false },
    { id: 'address', label: 'Address', alignRight: false },
    { id: 'balance', label: 'Balance', alignRight: false },
    { id: 'usd_balance', label: 'USD Balance', alignRight: false },
    { id: 'date', label: 'Date', alignRight: false },
  ];

  function handleRowClicked(row: AddressBalance) {
    push(`/apps/wallet-bot/balances/${row.chain}/${row.currency}/${row.address}`)
  }

  return (
    <Page title="Wallet Bot: Balances">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Wallet Bot Balances"
            links={[
              { name: 'Apps', href: '/apps' },
              { name: 'Wallet Bot', href: '/apps/wallet-bot' },
              { name: 'Balances' }
            ]}
          />

        <Card>

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>

              <TableHead>
                <TableRow>

                  {TABLE_HEAD.map((headCell) => (
                    <TableCell
                      key={headCell.id}
                      align={headCell.alignRight ? 'right' : 'left'}
                    >
                      {headCell.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

                <TableBody>
                  {addressBalances
                    .map((row: AddressBalance) => {
                      const { chain, currency, address, balance, updatedAt, usd_balance } = row;

                      const date = moment(updatedAt).format('MMM DD, YYYY - hh:mma')

                      return (
                        <TableRow
                          hover
                          key={`${chain}-${currency}-${address}`}
                          onClick={() => { handleRowClicked(row) }}
                        >

                          <TableCell onClick={() => console.log('row clicked')}>
                                {chain}
                          </TableCell>
                          <TableCell onClick={() => console.log('row clicked')} align="left">
                              {currency}
                          </TableCell>
                          <TableCell align="right">
                              {address}
                          </TableCell>
                          <TableCell onClick={() => console.log('row clicked')} align="left">
                              <span style={{color: 'white', textDecoration: 'none' }}>{balance}</span>
                          </TableCell>
                          <TableCell onClick={() => console.log('row clicked')} align="left">
                              <span style={{color: 'white', textDecoration: 'none' }}>{usd_balance || '?'}</span>
                          </TableCell>
                          <TableCell onClick={() => console.log('row clicked')} align="left">{date}</TableCell>

                        </TableRow>
                      );
                    })}

                </TableBody>

              </Table>
            </TableContainer>
          </Scrollbar>

          </Card>
        </Container>
    </Page>
  );
}
