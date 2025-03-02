package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"optometrist-simulator/controllers"
	"optometrist-simulator/controllers/api"
)

func main() {
	// Создаем новый роутер Gin
	r := gin.Default()

	// Определяем маршруты
	r.GET("/", controllers.Home)
	r.POST("/api/communication/all", api.GetAllQuestions)
	r.POST("/api/clients/all", api.GetAllClients)
	r.POST("/api/lenses/concave-sphere", api.GetConcaveSphereLenses)
	r.POST("/api/lenses/concave-cylinder", api.GetConcaveCylinderLenses)

	// Указываем путь к каталогу со статическими файлами
	// Первый аргумент - URL-префикс, второй - путь на диске
	r.Static("/public", "./public")

	// Запускаем сервер на порту 8181
	log.Println("Server started on http:://localhost:8181")
	if err := r.Run(":8181"); err != nil {
		log.Fatal("Server error:", err)
	}
}
