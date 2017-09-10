const messages = {
    pt_BR: {
        mozilla_api_locale: "pt-BR",
        description: "pt_BR - Português do Brasil",
        message: {
            locale_picker: {
                txt_title: "Locale",
                txt_description: "Locale usado na interface e nas consultas"
            },
            search_panel: {
                txt_title:                  "Consulta",
                txt_keyword:                "Palavra chave",
                btn_search:                 "Pesquisar",
                txt_searching:              "Pesquisando...",
                error_missing_keyword:      "Digite uma palavra chave",
                error_connection_kitsune:   "Houve uma falha ao consultar a API do Kitsune, tente novamente."
            },
            result_panel: {
                // Pluralization format: String for 0 results | String for one result | String for 2 or more results
                txt_title:  "Nenhum resultado para '{keyword}' | Um resultado para '{keyword}' | {count} resultados para '{keyword}'"
            },
            result_table_header: {
                txt_title:      "Título",
                txt_summary:    "Resumo",
                txt_options:    "Opções"
            },
            result_table_row: {
                txt_action_view:        "Visualizar documento no Kitsune",
                txt_action_edit:        "Editar documento no Kitsune",
                txt_action_download:    "Download do documento como HTML"
            }
        }
    },
    en_US: {
        mozilla_api_locale: "en-US",
        description: "en_US - North American English",
        message: {
            locale_picker: {
                txt_title: "Locale",
                txt_description: "Locale used in interface and search"
            },
            search_panel: {
                txt_title:                  "Search",
                txt_keyword:                "Keyword",
                btn_search:                 "Search",
                txt_searching:              "Searching...",
                error_missing_keyword:      "Please enter a keyword",
                error_connection_kitsune:   "There was an error connecting to Kitsune, please try again."
            },
            result_panel: {
                // Pluralization format: String for 0 results | String for one result | String for 2 or more results
                txt_title:  "No results for '{keyword}' | Single result for '{keyword}' | {count} results for '{keyword}'"
            },
            result_table_header: {
                txt_title:      "Title",
                txt_summary:    "Summary",
                txt_options:    "Options"
            },
            result_table_row: {
                txt_action_view:        "View document on Kitsune",
                txt_action_edit:        "Edit document on Kitsune",
                txt_action_download:    "Download document as HTML"
            }
        }
    }
};
