João Vitor Serra de Freitas
2040482222015

 Requisitos

 1 - Ajuste no barramento de eventos

 Faça com que o barramento de barramentos repasse os eventos apenas para que microsserviços 
 interessados neles os recebam, da seguinte forma:
 
 mss de lembrete: não recebe evento algum
 mss de observações: recebe evento ObservacaoClassificada
 mss de consulta: recebe todos os eventos, exceto ObservacaoClassificada
 mss de classificação: recebe o evento ObservacaoCriada
 
 feat(barramento): deixa de fazer broadcast
 
 2-Classificação de lembretes

 Ajuste o microsserviço de classificação de modo que os lembretes também sejam
 classificados. Um lembrete é considerado urgente se ele contém a palavra “urgente”. Ele
 é considerado importante se contém a palavra “importante”. Caso não possua nenhuma
 dessas palavras, ele é considerado ‘comum”.
 
 mensagem de commit: feat(classsificacao): lembretes classificados

 No final, crie uma tag anotada, marcando o último commit como importante