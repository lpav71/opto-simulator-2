package database

import (
	"fmt"
	"log"
	"os"
	"sync"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	DB   *gorm.DB  // Экспортируемая переменная, содержащая подключение к БД
	once sync.Once // Для обеспечения однократного выполнения
)

// Connection инициализирует подключение к базе данных
func Connection() {
	once.Do(func() {
		if err := godotenv.Load(); err != nil {
			log.Fatal("Ошибка загрузки .env файла")
		}
		var err error

		dbName := os.Getenv("DATABASE_NAME")       // Имя базы данных
		dbAddress := os.Getenv("DATABASE_ADDRESS") // Адрес базы данных
		dbPort := os.Getenv("DATABASE_PORT")       // Порт базы данных
		dbLogin := os.Getenv("DATABASE_LOGIN")     // Логин для базы данных
		dbPass := os.Getenv("DATABASE_PASSWORD")   // Пароль для базы данных
		dbCharSet := os.Getenv("DATABASE_CHARSET") // Кодировка базы данных

		dsn := dbLogin + ":" + dbPass + "@tcp(" + dbAddress + ":" + dbPort + ")/" + dbName + "?charset=" + dbCharSet + "&parseTime=True&loc=Local"
		DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

		if err != nil {
			fmt.Printf("failed to connect to the database: %v\n", err)
			fmt.Println("Press 'Enter' to exit...")
			fmt.Scanln()
		}
	})
}
