export interface SnackBarAlert {
  /**
   * Mensagem que será mostrada no snackbar
   */
  message: string;

  /**
   * É uma mensagem de sucesso, caso seja falso é considerado que é uma mensagem de erro
   * Se for false não é necessário passar nada quando for utilizar
   */
  isSuccess?: boolean;
}
