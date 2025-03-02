package api

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"optometrist-simulator/internal/models"
	"optometrist-simulator/internal/repositories"
)

// GetAllQuestions возвращает все вопросы
func GetAllQuestions(c *gin.Context) {
	var communication []models.Communication
	// Получение вопросов
	commRepo := repositories.NewCommunicationRepository()
	communication, err := commRepo.All()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, communication)
}

// GetAllClients возвращает всех клиентов
func GetAllClients(c *gin.Context) {
	// Получение вопросов
	clientsRepo := repositories.NewClientRefractionRepository()
	clientRefraction, err := clientsRepo.FindAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, clientRefraction)
}

// GetConcaveSphereLenses возвращает все линзы с вогнутой сферической поверхностью
func GetConcaveSphereLenses(c *gin.Context) {
	lensRepo := repositories.NewLensesRepository()
	lenses, err := lensRepo.GetConcaveSphere() // Предполагается, что это возвращает []float64
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	// Форматируем lenses для ответа
	formattedLenses := make([]string, len(lenses))
	for i, lens := range lenses {
		formattedLenses[i] = fmt.Sprintf("%.2f", lens) // Форматируем до 2 знаков после запятой
	}
	c.JSON(http.StatusOK, formattedLenses)
}

// GetConcaveCylinderLenses возвращает все линзы с вогнутым цилиндрическим изгибы
func GetConcaveCylinderLenses(c *gin.Context) {
	lensRepo := repositories.NewLensesRepository()
	lenses, err := lensRepo.GetConcaveCylinder()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	// Форматируем lenses для ответа
	formattedLenses := make([]string, len(lenses))
	for i, lens := range lenses {
		formattedLenses[i] = fmt.Sprintf("%.2f", lens) // Форматируем до 2 знаков после запятой
	}
	c.JSON(http.StatusOK, formattedLenses)
}
