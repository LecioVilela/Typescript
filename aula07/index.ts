enum TiposDePagamento {
    pagarme = 'PagarMe',
    paypal = 'Paypal',
    pagseguro = 'PagSeguro'
}

function processaPagamento (tipoDePagamento: TiposDePagamento) {
    console.log(`Processado pelo: ${tipoDePagamento}`);
}

processaPagamento(TiposDePagamento.pagseguro)