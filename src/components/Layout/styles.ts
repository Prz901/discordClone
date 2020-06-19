import styled from 'styled-components'

// SL Server list ou lista de servidores
// SN Server Name ou nome  do servidor
// CI Channel Info ou informaçoes do canal 
// Cl Channel list ou lista de canais do discord
// CD Channel data ou informaçoes do canal 
// UL User list lista de usuarios
// UI User info informaçoes do usuario 
//  

export const Grid = styled.div `
    display: grid;

    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas: 
        'SL SN CI CI'
        'SL CL CD UL'
        'SL UI CD UL'
        ;
        
    height: 100vh;
`