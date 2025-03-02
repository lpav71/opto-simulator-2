package controllers

import (
	"github.com/gin-gonic/gin"
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

type homeVariables struct {
	Title string
}

func Home(c *gin.Context) {
	// Инициализация переменных для страницы
	pageVariables := homeVariables{
		Title: "Главная",
	}

	tmpl, err := template.ParseFiles(
		filepath.Join("templates", "layout.html"),
		filepath.Join("templates/home", "home.html"),
	)
	if err != nil {
		log.Printf("Error loading templates: %v\n", err)
		c.String(http.StatusInternalServerError, "Internal Server Error")
		return
	}

	// Рендерим шаблон "layout.html" с передачей данных
	err = tmpl.ExecuteTemplate(c.Writer, "layout.html", pageVariables)
	if err != nil {
		log.Printf("Error rendering template: %v\n", err)
		c.String(http.StatusInternalServerError, "Internal Server Error")
		return
	}
}
